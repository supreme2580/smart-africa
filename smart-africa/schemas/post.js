export default {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title"
            }
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "url",
            title: "Url to post",
            type: "url"
        },
        {
            name: "given",
            title: "Given",
            type: "number"
        },
        {
            name: "reward",
            title: "Reward",
            type: "number"
        },
        {
            name: 'segments',
            title: 'Segments',
            type: 'string',
            options: {
              list: [ 
                { title: 'Mathematics', value: 'mathematics'},
                { title: 'English Language', value: 'english language'},
                { title: 'Physical Science', value: 'physical science' },
                { title: 'Chemical Science', value: 'chemical science' },
                { title: 'Biological Science', value: 'biological science' },
                { title: 'Business Studies', value: 'business studies' },
                { title: 'Economics', value: 'economics' },
                { title: 'Social Studies', value: 'social studies' },
                { title: 'Government', value: 'government' },
                { title: 'Literature', value: 'literature' },
                { title: 'Computer Science', value: 'computer science'}
              ]
            }
        },
    ]
}