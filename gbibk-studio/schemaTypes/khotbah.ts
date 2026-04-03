import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'khotbah',
  title: 'Khotbah',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Judul Khotbah', type: 'string' }),
    defineField({ name: 'pengkhotbah', title: 'Pembicara', type: 'string' }),
    defineField({ name: 'tanggal', title: 'Tanggal', type: 'date' }),
    defineField({ name: 'linkYoutube', title: 'Link YouTube', type: 'url' }),
    defineField({ 
      name: 'useYoutubeThumbnail',
      title: 'Gunakan Thumbnail YouTube?',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'customThumbnail',
      title: 'Thumbnail Kustom',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({parent}) => parent?.useYoutubeThumbnail
    }),
  ],
})