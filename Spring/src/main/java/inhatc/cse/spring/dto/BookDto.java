package inhatc.cse.spring.dto;


import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@ToString
@NoArgsConstructor //기본생성자
@AllArgsConstructor
@Builder
public class BookDto {
    private String title;
    private String author;
    private String publisher;
    private String price;
    private String created_at;
    private String thumbnailPhoto;
//    private String detailPhoto;

}
