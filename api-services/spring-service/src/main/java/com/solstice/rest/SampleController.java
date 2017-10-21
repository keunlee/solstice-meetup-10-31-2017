package com.solstice.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@Api(description = "Sample", tags = {"Sample Controller"})
public class SampleController {

    @RequestMapping(value = "/hello", method = {RequestMethod.GET}, produces="application/json")
    @ApiOperation(
            value = "Simple API",
            notes = "Simple REST call"
    )
    public String getSimpleResponse() {
        return "hello from j2ee";
    }
}
