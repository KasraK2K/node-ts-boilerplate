//================================================================================================================
//
//  #####   ###    ###   ####         #####   ####   #####    ####  ##    ##   ####  ######  #####  ###    ###
//  ##  ##  ## #  # ##  #    #        ##     ##     ##   ##  ##      ##  ##   ##       ##    ##     ## #  # ##
//  #####   ##  ##  ##     ##         #####  ##     ##   ##   ###     ####     ###     ##    #####  ##  ##  ##
//  ##      ##      ##   ##           ##     ##     ##   ##     ##     ##        ##    ##    ##     ##      ##
//  ##      ##      ##  ######        #####   ####   #####   ####      ##     ####     ##    #####  ##      ##
//
//================================================================================================================

// NOTE: To run typescript file install this `pm2 install typescript`
module.exports = {
  apps: [
    {
      name: process.env.NODE_ENV === "development" ? "api.grilla_dev" : "api.grilla_prod",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      script: process.env.NODE_ENV === "development" ? "src/server.ts" : "build/server.js",
      autorestart: true,
      watch: process.env.NODE_ENV === "development",
      time: true,
      instance_var: "grilla_api",
      instances: process.env.NODE_ENV === "development" ? "1" : "max",
      exec_mode: "cluster",

      // default variables
      env: {
        IS_ON_SERVER: true,
      },

      // development environment
      env_development: {
        NODE_ENV: "development",
        JWT_SECRET: "Embargo_mnG_V2.1_Emb@rgoL!m!ted@!AllManagementSaltsDevel0pment",
        PORT: "4100",
      },

      // production environment
      env_production: {
        NODE_ENV: "production",
        JWT_SECRET: "Embargo_mnG_V2.1_Emb@rgoL!m!ted@!AllManagementSaltsPr0d0cti0n",
        ENCRYPTION_SECRET: "Embargo_ScrT_All_Emb@rgoL!m!ted@!AllSyST£mSaltsPr0d0cti0n",
        PORT: "4101",
      },
    },
  ],
}
