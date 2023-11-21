package com.freire.my_api.DTO;

import lombok.Data;

@Data
public class TransactionDTO {
    String token;
    String payeeAnyIdentifier;
    Double value;
}