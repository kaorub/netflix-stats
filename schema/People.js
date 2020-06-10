cube(`People`, {
  sql: `SELECT * FROM public.people`,
  
  joins: {
    Objects: {
      sql: `${CUBE}.object_id = ${Objects}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [lastName, id, firstName, objectId, affiliationName]
    }
  },
  
  dimensions: {
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    birthplace: {
      sql: `birthplace`,
      type: `string`
    },
    
    objectId: {
      sql: `object_id`,
      type: `string`
    },
    
    affiliationName: {
      sql: `affiliation_name`,
      type: `string`
    }
  }
});
