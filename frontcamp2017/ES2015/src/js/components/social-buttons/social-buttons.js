class repostSocialButton {
    constructor() {
        this.constructorName = null;
    }

    createButton(name) {
        if (name === 'facebook') {
            this.constructorName = facebookButton;
        }

        if (name === 'vkontakte') {
            this.constructorName = vkontakteButton;
        }

        if (name === 'twitter') {
            this.constructorName = twitterButton;
        }

        return new this.constructorName();
    }
}

class vkontakteButton {
    constructor() {}

    render() {

    }
}


class facebookButton {
    constructor() {}
    repost() {
        // API methods;
    }
}
class twitterButton {
    constructor() {}
    repost() {
        // API methods;
    }
}

export default repostSocialButton;
