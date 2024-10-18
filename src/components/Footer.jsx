import React from "react";

function Footer() {
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById("embed-iframe");
    const options = {
      width: "100%",
      height: "160",
      theme: "dark",
      uri: "spotify:playlist:4I8KCCbcPbOaWiE4pjTBpG",
    };
    const callback = (EmbedController) => {
      document.querySelectorAll(".episode").forEach((episode) => {
        episode.addEventListener("click", () => {
          EmbedController.loadUri(episode.dataset.spotifyId);
        });
      });
    };
    IFrameAPI.createController(element, options, callback);
  };
  return (
    <>
      <div className="flex-row justify-items-center bg-[#131313] mt-2 mx-4">
        <div className="flex flex-row items-center md:mt-0">
          <div class="embed-container" id="embed-iframe"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
