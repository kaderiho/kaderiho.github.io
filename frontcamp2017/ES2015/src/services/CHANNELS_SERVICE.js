class CHANNELS_SERVICE {
    static getChannels() {
        return fetch('./data/channels-list.json')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                throw new TypeError(`${response.status} Failed to upload resources: `);
            })
            .catch((err) => {
                throw new TypeError(err);
            });
    }
}
