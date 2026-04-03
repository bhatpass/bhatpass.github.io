        function generatePass(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const peopleCount = document.getElementById('peopleCount').value;
            const riceAmount = document.getElementById('riceAmount').value;
            const riceType = document.getElementById('riceType').value;
            const eatTime = document.getElementById('eatTime').value;

            const passId = 'BP-' + Math.floor(1000 + Math.random() * 9000) + '-' + Math.floor(1000 + Math.random() * 9000);

            // Update QR Code
            document.getElementById('qrCodeImg').src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${passId}`;

            // Set text values
            document.getElementById('displayPassId').innerText = passId;
            document.getElementById('displayName').innerText = name;
            document.getElementById('displayPeople').innerText = peopleCount + " Person";
            document.getElementById('displayAmount').innerText = riceAmount;
            document.getElementById('displayRiceType').innerText = riceType;

            document.getElementById('passModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('passModal').classList.add('hidden');
            document.getElementById('bhatPassForm').reset();
        }

        function downloadPass() {
            const passElement = document.getElementById('passToDownload');
            
            html2canvas(passElement, { 
                scale: 3,
                useCORS: true,
                backgroundColor: null
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `Bhat-Ration-Pass-${document.getElementById('displayName').innerText}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }

        document.getElementById('passModal').addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });