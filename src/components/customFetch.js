
const customFetch = (auto) => {    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(auto);
            }, 2000);
        });
};

export default customFetch;
