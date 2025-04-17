import { defineField, defineType } from 'sanity'

import { FilterHorizontalIcon } from '~/assets'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: FilterHorizontalIcon,
  fields: [
    defineField({
      name: 'projects',
      title: 'Projects',
      description: '在 `/projects` 页面展示的项目列表',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    }),

    defineField({
      name: 'heroPhotos',
      title: 'Highlight Photos',
      description: '首页顶部的几张图片（推荐设置 6 张）',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'resume',
      title: 'Resume',
      description: '在主页侧边栏展示的简历信息（留空就不展示）',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Company Logo',
              description: '建议尺寸 100x100px 正方形裁切',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'start',
              title: 'From',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'end',
              title: 'To',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              company: 'company',
              title: 'title',
              logo: 'logo',
              start: 'start',
              end: 'end',
            },
            prepare: (selection) => ({
              title: `${selection.company} - ${selection.title}`,
              subtitle: `${selection.start} - ${selection.end ?? '至今'}`,
              media: selection.logo,
            }),
          },
        },
      ],
    }),
  ],

  preview: {
    select: {},
    prepare: () => ({
      title: 'Settings',
    }),
  },
})