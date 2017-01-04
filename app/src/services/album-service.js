albumService.$inject = ['$resource', 'apiUrl'];

export default function albumService($resource, apiUrl) {
    return $resource(`${apiUrl}/albums/:id`, { id: '@_id' });
}