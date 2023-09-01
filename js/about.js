    // progress bar
    //    container1
    var bar = new ProgressBar.Circle(container, {
        color: '#328cd9fc',
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#33FFE6', width: 3 },
        to: { color: '#328cd9fc', width: 4 },
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
    
          var value = Math.round(circle.value() * 1000);
          if (value >= 1000) {
            var formattedValue = (value / 1000).toFixed(1) + 'K' + '<br>' + '<p style="font-size:15px;">Performance</p>';
            circle.setText(formattedValue);
          } else if (value === 0) {
            circle.setText(""); 
          } else {
            circle.setText(value);
        }
    
        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';
    
      bar.animate(1.0); 
    
         // progress bar
        //  container2
         var bar = new ProgressBar.Circle(container2, {
        color: '#00b074',
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#00b074', width: 3 },
        to: { color: '#00b074', width: 4 },
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
    
          var value = Math.round(circle.value() * 5000);
          if (value >= 1000) {
            var formattedValue = (value / 1000).toFixed(1) + 'K' + '<br>' + '<p style="font-size:15px;">Users</p>';
            circle.setText(formattedValue);
        } else if (value === 0) {
            circle.setText(''); 
        } else {
            circle.setText(value); 
        }
    
        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';
    
      bar.animate(1.0); 
           // progress bar
        //    container3
           var bar = new ProgressBar.Circle(container3, {
        color: '#dd2e3e',
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#dd2e3e', width: 3 },
        to: { color: '#dd2e3e', width: 4 },
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
    
          var value = Math.round(circle.value() * 2500);
          if (value >= 1000) {
            var formattedValue = (value / 1000).toFixed(1) + 'K' + '<br>' + '<p style="font-size:15px;">Interviews Test</p>';
            circle.setText(formattedValue);
        } else if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }
    
        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';
    
      bar.animate(1.0); 