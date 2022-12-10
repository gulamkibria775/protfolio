const Sub = ({ state, actions, libraries }) => {

    const data = state.source.get(state.router.link);
    
    const sub = state.source[data.type][data.id];
    
    const postType = sub.acf.posttype
    console.log(postType)
    
    const Html2React = libraries.html2react.Component;
    
    useEffect(() => {
      actions.source.fetch("/");
      List.preload();
    }, []);
    
    return data.isReady ? (
      <Container>
        <div>
    
          {data.isSub}
        </div>
    
        {state.theme.featured.showOnPost && (
          <FeaturedMedia id={sub.featured_media} />
        )}
    
        <Content>
          <Html2React html={sub.content.rendered} />
          <ContactContainer>
          {postType = "renters" ? 
              <iframe 
              src="https://beds24.com/booking2.php?ownerid=65282&amp;referer=iframe"
              title="Frontity"
              width= "80%"
              height= "900px"
            />
              :
              <Contact />
          }
          </ContactContainer>
        </Content>
      </Container>
    ) : null;}