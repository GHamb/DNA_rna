$("#dna1").on('input', function () {
    var rna = ""
    for (var i = 0; i < this.value.length; i++) {

        if (this.value[i] == "A" || this.value[i] == "a") {

            rna += 'U'
        } else if (this.value[i] == "C" || this.value[i] == "c") {

            rna += 'G'
        } else if (this.value[i] == "G" || this.value[i] == "g") {

            rna += 'C'
        } else if (this.value[i] == "T" || this.value[i] == "t") {

            rna += 'A'
        }

    }
    $('#rna1').text(rna)


})
