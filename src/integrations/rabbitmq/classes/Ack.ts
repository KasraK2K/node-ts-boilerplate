import { RabbitMQ } from ".."

class Ack {
  constructor(private superThis: RabbitMQ) {}

  consumer(callback: (content: any) => Promise<any>, queue_name: string): void {
    this.superThis.amqp.connect(this.superThis.uri, (error0, connection) => {
      if (error0) throw error0

      connection.createChannel((error1, channel) => {
        if (error1) throw error1

        /**
         * @argument {durable} This makes sure the queue is declared before attempting to consume from it
         */
        channel.assertQueue(queue_name, { durable: true })

        /**
         * @param {prefetch} This tells RabbitMQ not to give more than one message to a worker at a time.
         * Or, in other words, don't dispatch a new message to a worker until it has processed and acknowledged the previous one.
         * Instead, it will dispatch it to the next worker that is not still busy.
         */
        channel.prefetch(1)

        console.log("Waiting for messages in %s. To exit press CTRL+C", queue_name)

        channel.consume(
          queue_name,
          (message) => {
            if (message) {
              const content = JSON.parse(message.content.toString())
              callback(content)
                .then(() => channel.ack(message))
                .catch((error) => console.log(error.message))
            }
          },
          { noAck: false }
        )
      })
    })
  }

  producer(message: Record<string, any> = {}, queue_name: string): void {
    this.superThis.amqp.connect(this.superThis.uri, (error0, connection) => {
      if (error0) throw error0

      connection.createChannel((error1, channel) => {
        console.log(111)
        if (error1) throw error1
        console.log(222)

        /**
         * @argument {durable} This makes sure the queue is declared before attempting to consume from it
         */
        channel.assertQueue(queue_name, { durable: true })

        /**
         * @argument {persistent} Persistent messages will be written to disk as soon as they reach the queue,
         * while transient messages will be written to disk only so that they can be evicted from memory while under memory pressure
         */
        channel.sendToQueue(queue_name, Buffer.from(JSON.stringify(message)), { persistent: true })
      })

      setTimeout(() => connection.close(), 500)
    })
  }
}

export default Ack