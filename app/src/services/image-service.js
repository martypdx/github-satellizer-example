imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
    return {
        add(image) {
            return $http.post(`${apiUrl}/images`, image)
                .then(res => res.data);
        },
        remove(id) {
            return $http.delete(`${apiUrl}/images/${id}`)
                .then(res => res.data);
        },
        tweet(image) {
            return $http.post(`${apiUrl}/images/${image._id}/tweets`)
                .then(res => res.data);
        }
    };
}