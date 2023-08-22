export default {
  install(Vue, options) {
    const defaultOptions = {
      welcomeMessage: "Rất vui khi được hỗ trợ bạn!",
      autopopup: "0",
      width: "300",
      height: "300",
    };

    const mergedOptions = { ...defaultOptions, ...options };

    const { oaid, welcomeMessage, autopopup, width, height } = mergedOptions;

    // Tạo một div element cho Zalo Chat Widget
    const zaloChatDiv = document.createElement("div");
    zaloChatDiv.className = "zalo-chat-widget";
    zaloChatDiv.setAttribute("data-oaid", oaid);
    zaloChatDiv.setAttribute("data-welcome-message", welcomeMessage);
    zaloChatDiv.setAttribute("data-autopopup", autopopup);
    zaloChatDiv.setAttribute("data-width", width);
    zaloChatDiv.setAttribute("data-height", height);

    // Tạo một script element để tải Zalo Chat SDK
    const zaloChatScript = document.createElement("script");
    zaloChatScript.src = "https://sp.zalo.me/plugins/sdk.js";

    // Thêm div và script vào body của trang
    document.body.appendChild(zaloChatDiv);
    document.body.appendChild(zaloChatScript);
  },
};
