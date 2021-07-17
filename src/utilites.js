const paginate = (followers) => {
    const defaultArrayNumber = 10;
    const numberPerPage = Math.ceil(followers.length / defaultArrayNumber);

    const page = Array.from({ length: numberPerPage }, (_, index) => {
        let start = index * defaultArrayNumber;
        let newArray = followers.slice(start, start + defaultArrayNumber);
        return newArray;
    });

    return page;
};

export default paginate;
