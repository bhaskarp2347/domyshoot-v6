const videoModal = ({ video }) => {
  return (
    <div className="modal fade" id="videoModal" aria-hidden="true" aria-labelledby="videoModalLabel"
         tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="videoModalLabel">{video.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div className="modal-body">
            {video.youtubeVideoID? (
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeVideoID}`}
                title={video.title}
                style={{ width: "100%", height: "300px" }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ): (
              <></>
            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default videoModal
