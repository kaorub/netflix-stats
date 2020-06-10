cube(`Relationships`, {
  sql: `SELECT * FROM public.relationships`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [relationshipObjectId, id, personObjectId, title, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    sequence: {
      sql: `sequence`,
      type: `string`
    },
    
    isPast: {
      sql: `is_past`,
      type: `string`
    },
    
    relationshipObjectId: {
      sql: `relationship_object_id`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    personObjectId: {
      sql: `person_object_id`,
      type: `string`
    },
    
    title: {
      sql: `title`,
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
    
    endAt: {
      sql: `end_at`,
      type: `time`
    },
    
    startAt: {
      sql: `start_at`,
      type: `time`
    }
  }
});
