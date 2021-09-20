
    const $video = document.querySelector('#video');
    const $play = document.querySelector('#play');
    const $resTen = document.querySelector('#resTen');
    const $moreTen = document.querySelector('#moreTen');
    const $pausa = document.querySelector('#pausa');
    const $progress = document.querySelector('#progress');
    
    $play.addEventListener('click', handlePlay);
    $pausa.addEventListener('click', handlePausa);
    $resTen.addEventListener('click', handleResTen);
    $moreTen.addEventListener('click', handleMoreTen);
    $progress.addEventListener('input', handleInput);
    $video.addEventListener ('loadedmetadata' ,handleLoaded);
    $video.addEventListener ('timeupdate' ,handleUpdate);

    function handlePlay(){
        $video.play();
        $play.hidden = true;
        $pausa.hidden = false;
    }

    function handlePausa() {
        $video.pause();
        $play.hidden = false;
        $pausa.hidden = true;
    }

    function handleResTen() {
        $video.currentTime -= 10;
    }

    function handleMoreTen() {
        $video.currentTime += 10;
    }

    function handleLoaded (){
        $progress.max =  $video.duration;
    }

    function handleUpdate(){
        $progress.value = $video.currentTime;
    }

    function handleInput (){
        $video.currentTime = $progress.value ;
    }