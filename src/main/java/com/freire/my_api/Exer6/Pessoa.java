package com.freire.my_api.Exer6;

public class Pessoa {

    private Integer age;
    private String name;

    public Pessoa(Integer age, String name) {
        this.age = age;
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    @Override
    public String toString()
    {
        return "name:" + name + " age: " + age;
    }

}
