var _King = 0;
var _Queen = 1;
var _Rook = 2;
var _Bishop = 3;
var _Knight = 4;
var _Pawn = 5;

var _Unclaimed = 0;
var _Red = 1;
var _Blue = 2;
var _Yellow = 3;
var _Green = 4;

// Returns an int between 0 and [max], excluding [max].
function myRandom(max)
{
	return Math.floor((Math.random() * max));
}

function arrayRandom(array)
{
	return array ? array[myRandom(array.length)] : undefined;
}

// This function returns an array of 49 values: the numbers between 0 and 48, no repeating, at random places.
function randomize49(length)
{
	length = length || 49;

	// First, create an array with 0 to 48 in order
	var randomArray = []
	for (i = 0; i < length; i++)
	{
		randomArray[i] = i;
	}

	// Second, shuffle it: for each position, roll another and exchange them.
	for (j = 0; j < length; j++)
	{
		var roll = myRandom(length);
		if (roll != j)
		{
			var permute = randomArray[j];
			randomArray[j] = randomArray[roll];
			randomArray[roll] = permute;
		}
	}

	// Third, for extra randomness, exchange some more random places.
	for (k = 0; k < 25; k++)
	{
		var roll1 = myRandom(length);
		var roll2 = myRandom(length);
		if (roll1 != roll2)
		{
			var permute = randomArray[roll1];
			randomArray[roll1] = randomArray[roll2];
			randomArray[roll2] = permute;
		}
	}
	return randomArray;
}