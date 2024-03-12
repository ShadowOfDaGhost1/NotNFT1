
    var nftItems = document.querySelectorAll('.nft-item');
    var modal = document.getElementById("modal");
    var modalImg = document.querySelector(".modal-img");
    var closeModal = document.getElementById("close");

    nftItems.forEach(function(nftItem) {
        nftItem.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.querySelector('img').src;
        });
    });

    // Закрываем модальное окно при клике на "закрыть"
    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    // Закрываем модальное окно при клике вне его области
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };