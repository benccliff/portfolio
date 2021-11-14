const CENTRE_STYLE = {
    alignItems: 'center', justifyContent: 'center'
}

export default class Banner {

    constructor(name, profession) {
        this.name = name;
        this.profession = profession;
    }

    render() {
        return (
            <div className="Banner" style={CENTRE_STYLE}>
                <h1>Hi, I'm {this.name}</h1>
                <h2>{this.profession}</h2>
            </div>
        );
    }

}
