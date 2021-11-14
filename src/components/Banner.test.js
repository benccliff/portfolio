import Banner from "./Banner";

test('initialises correctly', () => {
    const banner = new Banner("foo", "bar");
    expect(banner.name === "foo");
    expect(banner.profession === "bar");
})
