var initialSum = 3000;
var sum = initialSum;
const loan_rate = 1.99;
const loan_period = 30;

function increase()	{
	if (sum < rangeSlider.maxSum) {
		sum += rangeSlider.stepSum;
		//document.getElementById("slider").stepUp();
	}
	update();
}
function decrease()	{
	if (sum > rangeSlider.minSum) {
		sum -= rangeSlider.stepSum;
		//document.getElementById("slider").stepDown();
	}
	update();
}
function change(e)	{
	try	{
		sum = parseInt(e.value.match(/[0-9]/g).join(''), 10);
		if (sum >= rangeSlider.minSum && sum <= rangeSlider.maxSum) {
			//sum = Math.round(sum/stepSum)*stepSum;
		} else	{
			sum = initialSum;
		}
		update();
	} catch (e)	{
		console.log(e);
	}
}
function update()	{
	try	{
		sum = Math.round(sum / rangeSlider.stepSum) * rangeSlider.stepSum;

		document.getElementById("editText").value = rangeSlider.format(sum);
		document.getElementById("textLabel").innerHTML = rangeSlider.format(calculate(sum));
		rangeSlider.setBar((sum - rangeSlider.minSum) / (rangeSlider.maxSum - rangeSlider.minSum));
	}	catch(e)	{
		console.log(e);
	}
}

function input(e) {
	try	{
		const cursor = e.value.length - e.selectionEnd;
		const numbers = e.value.match(/[0-9]/g);
		sum = numbers && numbers.length ? parseInt(numbers.join(''), 10) : 0;
		e.value = rangeSlider.format(sum);
		e.selectionStart = e.value.length - cursor;
		e.selectionEnd = e.value.length - cursor;
	} catch (e)	{
		console.log(e);
	}
}

function calculate(amount) {
	if (!amount) {
		amount = rangeSlider.minSum;
	}
	return amount * (100 + loan_rate * loan_period) / 100;
}