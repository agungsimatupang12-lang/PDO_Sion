const verses = [
  {
    verse: 'TUHAN adalah gembalaku, takkan kekurangan aku.',
    reference: 'Mazmur 23:1'
  },
  {
    verse: 'Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.',
    reference: 'Filipi 4:13'
  },
  {
    verse: 'Percayalah kepada TUHAN dengan segenap hatimu.',
    reference: 'Amsal 3:5'
  },
  {
    verse: 'Mintalah, maka akan diberikan kepadamu.',
    reference: 'Matius 7:7'
  },
  {
    verse: 'Aku menyertai kamu senantiasa sampai kepada akhir zaman.',
    reference: 'Matius 28:20'
  }
];

const verseElement = document.getElementById('dailyVerse');
const refElement = document.getElementById('dailyReference');

if (verseElement && refElement) {
  const today = new Date().getDate();
  const selected = verses[today % verses.length];

  verseElement.textContent = `“${selected.verse}”`;
  refElement.textContent = selected.reference;
}