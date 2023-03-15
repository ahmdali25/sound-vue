<template>
  <main>
    <section class="content-section">
      <div class="genre-title-wrapper">
        <h1 class="genre-title">Progressive House</h1>
        <div class="genre-detail-wrapper">
          <p class="genre-detail">
            Progressive house is a subgenre of house music. The progressive
            house style emerged in the early 1990s. It initially developed in
            the United Kingdom as a natural progression of American and European
            house music of the late 1980s.
          </p>
        </div>
        <iframe
          width="600"
          height="320"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/168285849&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
      <div class="iframe-wrapper">
        <iframe
          class="iframe"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/156125563&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <iframe
          class="iframe"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316486473&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </section>
    <section class="other-songs">
      <div class="title-wrapper"><h1 class="title">Other Songs</h1></div>
      <div class="other-songs-wrapper">
        <div>
          <iframe
            class="other-iframe"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1084594792&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
        <div>
          <iframe
            class="other-iframe"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340858765&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
        <div>
          <iframe
            class="other-iframe"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319185970&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
        <div>
          <iframe
            class="other-iframe"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290114450&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
        <div>
          <iframe
            class="other-iframe"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/483164265&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
        <div>
          <iframe
            class="other-iframe"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229387571&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
      </div>
      <div class="text-more-wrapper">
        <h3 class="text-more">
          <a
            href="https://soundcloud.com/tags/progressive%2Fhouse/popular-tracks"
            target="_blank"
            >More Songs</a
          >
        </h3>
      </div>
    </section>
  </main>
</template>

<style scoped>
.content-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 40px;
}

.genre-title {
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 32px;
  color: var(--text-primary);
  margin-bottom: 40px;
}

.genre-detail-wrapper {
  width: 75%;
}

.genre-detail {
  font-family: "Nunito Sans";
  font-weight: 400;
  font-size: 18px;
  line-height: 178%;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.iframe-wrapper {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.iframe {
  width: 450px;
  height: 260px;
  border-radius: 10px;
}

.title-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.title {
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 32px;
  color: var(--text-primary);
}

.other-songs {
  background: #f2faff;
  margin-left: -85px;
  margin-right: -85px;
  padding: 20px 80px;
}

.other-songs-wrapper {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
}

.other-iframe {
  width: 100%;
  height: 300px;
  border-radius: 10px;
}

.text-more-wrapper {
  text-align: center;
}

.text-more a {
  text-decoration: none;
  color: var(--text-tertiary);
}
</style>
