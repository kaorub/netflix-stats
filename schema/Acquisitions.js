cube(`Acquisitions`, {
  sql: `SELECT * FROM public.acquisitions`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, acquiredObjectId, acquiringObjectId, createdAt, updatedAt]
    },
    
    priceAmount: {
      sql: `price_amount`,
      type: `sum`
    }
  },
  
  dimensions: {
    termCode: {
      sql: `term_code`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    acquiredObjectId: {
      sql: `acquired_object_id`,
      type: `string`
    },
    
    sourceUrl: {
      sql: `source_url`,
      type: `string`
    },
    
    acquiringObjectId: {
      sql: `acquiring_object_id`,
      type: `string`
    },
    
    sourceDescription: {
      sql: `source_description`,
      type: `string`
    },
    
    priceCurrencyCode: {
      sql: `price_currency_code`,
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
    
    acquiredAt: {
      sql: `acquired_at`,
      type: `time`
    }
  }
});
