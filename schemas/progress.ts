export default {
  name: 'progress',
  type: 'document',
  title: 'Progreso',
  fields: [
    {
      name: 'lesson',
      title: 'Lección',
      type: 'reference',
      to: [{type: 'lesson'}],
    },
    {
      name: 'user',
      title: 'Usuario',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          {title: 'No Iniciado', value: 'not_started'},
          {title: 'Iniciado', value: 'started'},
          {title: 'Completado', value: 'completed'},
        ],
      },
    },
  ],
}
