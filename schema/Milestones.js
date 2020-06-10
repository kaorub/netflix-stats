cube(`Milestones`, {
  sql: `SELECT * FROM public.milestones`,
  
  joins: {
    Objects: {
      sql: `${CUBE}.object_id = ${Objects}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [objectId, id, createdAt, updatedAt]
    }
  },
  
  dimensions: {
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
    
    milestoneCode: {
      sql: `milestone_code`,
      type: `string`
    },
    
    sourceUrl: {
      sql: `source_url`,
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
    
    milestoneAt: {
      sql: `milestone_at`,
      type: `time`
    }
  }
});
