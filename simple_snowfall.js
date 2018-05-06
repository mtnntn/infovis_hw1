var width = screen.width, height = screen.height;

var svg_container = d3.select("body").append("svg").attr("width", width).attr("height", height);

d3.timer(function() {

    var snowflake = {
        cx: Math.random() * width,
        cy: Math.random() * -0.3,
        r : Math.random()
    };

    svg_container.append("circle")
        .attr("cx", snowflake.cx)
        .attr("cy", snowflake.cy)
        .attr("r" , snowflake.r )
        .attr("fill", "white")
        .transition().duration(20000).attr("cy", height).remove();
});