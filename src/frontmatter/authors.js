// get author, without decoding
// WordPress doesn't allow funky characters in usernames anyway
module.exports = (post) => {
    if (!post.data.creator) {
        return [];
    }
    return post.data.creator.map((a) => a.replace('.', ' '));
};
