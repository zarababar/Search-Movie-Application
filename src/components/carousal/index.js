const Carousal = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/images/avatar.jpg" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/insodeout.jpg" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/batman.jpg" alt="Third slide"/>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Carousal;