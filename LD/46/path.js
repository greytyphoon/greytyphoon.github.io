function computePaths()
{
	// Reset distances
	points.forEach(point => { point.distance = undefined; });

	// Set distance for the point that's directly on the seed
	var target = seed.position;
	target.distance = 0;

	let toProcess = [target];
	for (let i = 0; i < toProcess.length; i++)
	{
		var point = toProcess[i];
		var unrankedChildren = point.links.filter(lnk => lnk.distance === undefined);
		unrankedChildren.forEach(pt => { pt.distance = point.distance + 1; });
		toProcess.push(...unrankedChildren);
	}
}