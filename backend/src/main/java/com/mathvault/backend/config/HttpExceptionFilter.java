package com.mathvault.backend.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class HttpExceptionFilter {

    private static final Logger logger = LoggerFactory.getLogger(HttpExceptionFilter.class);

    private static final Map<Integer, String> errorMessages = new HashMap<>() {
        {
            put(404, "Not Found");
            put(500, "Internal server error");
        }
    };

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<Object> handleHttpException(ResponseStatusException ex, WebRequest request) {
        int status = ex.getStatusCode().value();
        String message = ex.getReason() != null ? ex.getReason()
                : errorMessages.getOrDefault(status, "Unexpected error");

        logger.error("HTTP Status: {} Error Message: {}", status, ex.getMessage(), ex);

        if (status == HttpStatus.BAD_REQUEST.value() && isValidationError(ex)) {
            message = formatValidationErrorResponse(ex);
        }

        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("statusCode", status);
        responseBody.put("message", message);

        return new ResponseEntity<>(responseBody, ex.getStatusCode());
    }

    private boolean isValidationError(ResponseStatusException ex) {
        Object response = ex.getReason();
        return response instanceof String && ((String) response).contains("errors");
    }

    @SuppressWarnings("null")
    private String formatValidationErrorResponse(ResponseStatusException ex) {
        String response = ex.getReason();

        return response.substring(response.indexOf("errors"));
    }
}
