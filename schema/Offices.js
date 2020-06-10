cube(`Offices`, {
  sql: `SELECT * FROM public.offices`,
  
  joins: {
    Objects: {
      sql: `${CUBE}.object_id = ${Objects}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [countryCode, objectId, id, city, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    region: {
      sql: `region`,
      type: `string`
    },
    
    countryCode: {
      sql: `country_code`,
      type: `string`
    },
    
    objectId: {
      sql: `object_id`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    zipCode: {
      sql: `zip_code`,
      type: `string`
    },
    
    stateCode: {
      sql: `state_code`,
      type: `string`
    },
    
    address2: {
      sql: `address2`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    address1: {
      sql: `address1`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  }
});
