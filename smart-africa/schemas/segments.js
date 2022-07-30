export default {
    name: "segments",
    title: "Segments",
    type: "document",
    fields: [
        {
            name: "segment_name",
            title: "Segment Name",
            type: "string"
        },
        {
            name: "segment",
            title: "Segment",
            type: "slug",
            options: {
                source: "segment_name",
                maxLength: 200,
                slugify: input => input.concat().replace(/\s+/g, ' ').slice(0, 200)
            }
        },
    ]
}