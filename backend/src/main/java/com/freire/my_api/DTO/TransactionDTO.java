package com.freire.my_api.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TransactionDTO {
    String token;
    String payeeAnyIdentifier;
    Double value;
}