var sum = 10000;
function increase()	{
	if (sum<30000)	{
		sum += 500;
		//document.getElementById("slider").stepUp();
	}
	update();
}
function decrease()	{
	if (sum>2000)	{
		sum -= 500;
		//document.getElementById("slider").stepDown();
	}
	update();
}
function change()	{
	try	{
		sum = parseInt(document.getElementById("editText").value, 10);
		if (sum>=2000 && sum<=30000)	{
			//sum = Math.round(sum/500)*500;
		} else	{
			sum = 10000;
		}
		update();
	} catch (e)	{
		console.log(e);
	}
}
function update()	{
	try	{
		sum = Math.round(sum/500)*500;

		document.getElementById("editText").value = sum;
		document.getElementById("textLabel").innerHTML = sum;
		rangeSlider.setBar((sum-2000)/(30000-2000));
	}	catch(e)	{
		console.log(e);
	}
}