import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'renungan',
  title: 'Renungan',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Judul', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug (Link URL)', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'author', title: 'Penulis', type: 'string' }),
    defineField({ name: 'mainImage', title: 'Gambar Utama', type: 'image', options: { hotspot: true } }),
    defineField({ 
      name: 'kategori', 
      title: 'Kategori', 
      type: 'string', 
      options: { list: [
        {title: 'RISE Monthly Update', value: 'buletin'},
        {title: 'Renungan Anak', value: 'renungan-anak'},
        {title: 'Artikel Rohani', value: 'artikel-rohani'},
      ]} 
    }),
    defineField({ name: 'publishedAt', title: 'Tanggal Terbit', type: 'datetime' }),
    defineField({ name: 'body', title: 'Isi Renungan', type: 'array', of: [{type: 'block'}] }),
  ],
})