function getMusicTitlesByYear(tracks) {
  // Check if the input is an array
  if (!Array.isArray(tracks)) {
    throw new Error('Input must be an array');
  }

  // Initialize an empty object to store results
  const result = {};

  // Iterate through each track in the array
  tracks.forEach(track => {
    // Validate that each track has the required properties and correct types
    if (typeof track.title !== 'string' || typeof track.artist !== 'string' || typeof track.year !== 'number') {
      throw new Error('Each track must have a title (string), artist (string), and year (number)');
    }

    // If the year is not already a key in the result object, initialize an empty array for that year
    if (!result[track.year]) {
      result[track.year] = [];
    }

    // Add the track title to the corresponding year array
    result[track.year].push(track.title);
  });

  // Sort the arrays of track titles alphabetically
  for (let year in result) {
    result[year].sort();
  }

  return result;
}

// Example usage:
const tracks = [
  { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
  { title: 'Levitating', artist: 'Dua Lipa', year: 2021 },
  { title: 'Save Your Tears', artist: 'The Weeknd', year: 2020 },
];

console.log(getMusicTitlesByYear(tracks));
