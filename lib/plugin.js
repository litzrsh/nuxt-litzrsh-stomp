import Socket from "litzrsh-stomp";

export default async (ctx, inject) => {
    const host = <%= JSON.stringify(options.host) %>;
    const debug = <%= options.debug %>;

    const stomp = new Socket(host, debug);
    ctx.$stomp = stomp;
    inject("stomp", stomp);
};