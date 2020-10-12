import Socket from "litzrsh-stomp";

export default (ctx, inject) => {
    const host = <%= options.host %>;
    const debug = <%= options.debug %>;

    const stomp = new Socket(host, debug);
    ctx.$stomp = stomp;
    inject("stomp", stomp);
};