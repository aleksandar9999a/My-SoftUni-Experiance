const UserService = {
    getData: async function (url) {
        let res = await fetch(url);
        return res.json();
    }
}

export default UserService;