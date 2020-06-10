cube(`Funds`, {
  sql: `SELECT * FROM public.funds`,
  
  joins: {
    Objects: {
      sql: `${CUBE}.object_id = ${Objects}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, id, objectId, createdAt, updatedAt]
    },
    
    raisedAmount: {
      sql: `raised_amount`,
      type: `sum`
    }
  },
  
  dimensions: {
    raisedCurrencyCode: {
      sql: `raised_currency_code`,
      type: `string`
    },
    
    sourceUrl: {
      sql: `source_url`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    objectId: {
      sql: `object_id`,
      type: `string`
    },
    
    sourceDescription: {
      sql: `source_description`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },
    
    fundedAt: {
      sql: `funded_at`,
      type: `time`
    }
  }
});
