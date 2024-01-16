import NavigoLibrary from "navigo";

const navigoInstance = new NavigoLibrary("/", { linkSelector: "a", hash: true });

const reder = (content, target) => {
    target.innerHTML = content();
}

export { reder, navigoInstance as route };
 