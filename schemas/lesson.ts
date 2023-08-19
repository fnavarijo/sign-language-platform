export default {
  name: 'lesson',
  type: 'document',
  title: 'Lección',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'sign',
      title: 'Seña',
      type: 'image',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'url',
    },
  ]
}