import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nama Event', type: 'string' }),
    defineField({ name: 'tanggal', title: 'Tanggal Event', type: 'datetime' }),
    defineField({ name: 'lokasi', title: 'Lokasi', type: 'string' }),
    defineField({ name: 'deskripsi', title: 'Deskripsi Singkat', type: 'text' }),
    defineField({ name: 'poster', title: 'Gambar Event', type: 'image', options: { hotspot: true } }),
  ],
})