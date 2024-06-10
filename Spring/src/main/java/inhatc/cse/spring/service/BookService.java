package inhatc.cse.spring.service;

import inhatc.cse.spring.dto.BookDto;
import inhatc.cse.spring.dto.BookResponseDto;
import inhatc.cse.spring.dto.MemberDto;
import inhatc.cse.spring.repository.BookRepository;
import inhatc.cse.spring.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public int save(BookDto bookDto) {
        return bookRepository.save(bookDto);
    }

    public List<BookResponseDto> findAll() {
        return bookRepository.findAll();
    }

    public BookResponseDto findById(int id) {
        return bookRepository.findById(id);
    }
}
